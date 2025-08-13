import { useEffect, useMemo, useState } from "react";

interface FormState {
  date: string;
  city: string;
  postalCode: string;
  distance: number;
  duration: number;
  start: string;
  end: string;
  formula: "essentielle" | "premium" | "evenement";
  cadre: boolean;
  accessoires: boolean;
  fond: boolean;
  hote: boolean;
  double: boolean;
  code: string;
}

const defaultState: FormState = {
  date: "",
  city: "",
  postalCode: "",
  distance: 0,
  duration: 2,
  start: "",
  end: "",
  formula: "essentielle",
  cadre: false,
  accessoires: false,
  fond: false,
  hote: false,
  double: false,
  code: ""
};

const PriceSimulator = () => {
  const [form, setForm] = useState<FormState>(defaultState);

  useEffect(() => {
    const saved = localStorage.getItem("simulateur-photobooth");
    if (saved) setForm({ ...form, ...JSON.parse(saved) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("simulateur-photobooth", JSON.stringify(form));
  }, [form]);

  const crossesMidnight = useMemo(() => {
    if (!form.start || !form.end) return false;
    const start = new Date(`1970-01-01T${form.start}`);
    const end = new Date(`1970-01-01T${form.end}`);
    return end <= start;
  }, [form.start, form.end]);

  const prices = useMemo(() => {
    const baseTable = {
      essentielle: { base: 290, extra: 60 },
      premium: { base: 390, extra: 70 },
      evenement: { base: 520, extra: 80 }
    } as const;

    const baseCfg = baseTable[form.formula];
    let ht = baseCfg.base + Math.max(0, form.duration - 2) * baseCfg.extra;

    if (form.cadre) ht += 40;
    if (form.accessoires) ht += 35;
    if (form.fond) ht += 60;
    if (form.hote) ht += 45 * form.duration;
    if (form.double) ht += 20;

    const livraison = form.distance > 15 ? (form.distance - 15) * 2 * 1.2 : 0;
    ht += livraison;

    if (crossesMidnight) ht += 90;

    const remise = form.code.toUpperCase() === "NANTES10" ? ht * 0.1 : 0;
    ht -= remise;

    const tva = ht * 0.2;
    const ttc = ht + tva;
    const acompte = ttc * 0.3;

    return { ht, tva, ttc, acompte, livraison, remise };
  }, [form, crossesMidnight]);

  const update = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const isValid =
    form.date &&
    form.city &&
    form.postalCode &&
    form.start &&
    form.end &&
    form.distance >= 0;

  return (
    <section id="simulateur" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Calculez le prix de votre location en 30&nbsp;secondes
        </h2>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Date de l'événement</label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Ville et CP</label>
              <input
                type="text"
                placeholder="Nantes 44000"
                value={`${form.city} ${form.postalCode}`.trim()}
                onChange={(e) => {
                  const parts = e.target.value.split(" ");
                  update("city", parts[0] || "");
                  update("postalCode", parts[1] || "");
                }}
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Distance depuis Nantes (km)</label>
              <input
                type="number"
                min={0}
                value={form.distance}
                onChange={(e) => update("distance", Number(e.target.value))}
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Durée (heures)</label>
              <select
                value={form.duration}
                onChange={(e) => update("duration", Number(e.target.value))}
                className="w-full border rounded-md p-2"
              >
                {[2, 4, 6, 8].map((h) => (
                  <option key={h} value={h}>
                    {h}h
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Heure de début</label>
              <input
                type="time"
                value={form.start}
                onChange={(e) => update("start", e.target.value)}
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Heure de fin</label>
              <input
                type="time"
                value={form.end}
                onChange={(e) => update("end", e.target.value)}
                className="w-full border rounded-md p-2"
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium mb-1">Formule</label>
            <div className="flex gap-4">
              {[
                { key: "essentielle", label: "Essentielle" },
                { key: "premium", label: "Premium" },
                { key: "evenement", label: "Événement" }
              ].map((f) => (
                <label key={f.key} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="formule"
                    checked={form.formula === f.key}
                    onChange={() => update("formula", f.key)}
                  />
                  {f.label}
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Options</label>
            <div className="grid sm:grid-cols-2 gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.cadre}
                  onChange={(e) => update("cadre", e.target.checked)}
                />
                Personnalisation cadre photo (+40€)
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.accessoires}
                  onChange={(e) => update("accessoires", e.target.checked)}
                />
                Accessoires/props (+35€)
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.fond}
                  onChange={(e) => update("fond", e.target.checked)}
                />
                Fond/backdrop premium (+60€)
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.hote}
                  onChange={(e) => update("hote", e.target.checked)}
                />
                Hôte/technicien sur place (+45€/h)
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.double}
                  onChange={(e) => update("double", e.target.checked)}
                />
                Impression double (+20€)
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Code promo</label>
            <input
              type="text"
              value={form.code}
              onChange={(e) => update("code", e.target.value)}
              className="w-full border rounded-md p-2"
            />
          </div>

          <div className="bg-white rounded-md p-6 shadow space-y-2">
            <h3 className="font-bold mb-2">Récapitulatif</h3>
            <p>Formule : {form.formula}</p>
            {form.cadre && <p>Personnalisation cadre : 40€</p>}
            {form.accessoires && <p>Accessoires : 35€</p>}
            {form.fond && <p>Backdrop premium : 60€</p>}
            {form.hote && <p>Hôte/technicien : {45 * form.duration}€</p>}
            {form.double && <p>Impression double : 20€</p>}
            {prices.livraison > 0 && <p>Livraison : {prices.livraison.toFixed(2)}€</p>}
            {crossesMidnight && <p>Pack Nuit : 90€</p>}
            {prices.remise > 0 && <p>Remise : -{prices.remise.toFixed(2)}€</p>}
            <p>Total HT : {prices.ht.toFixed(2)}€</p>
            <p>TVA (20%) : {prices.tva.toFixed(2)}€</p>
            <p className="font-semibold">Total TTC : {prices.ttc.toFixed(2)}€</p>
            <p>Acompte (30%) : {prices.acompte.toFixed(2)}€</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              disabled={!isValid}
              onClick={() => alert("Fonction devis à implémenter")}
              className="flex-1 bg-amber-500 text-white py-3 rounded-md disabled:opacity-50"
            >
              Recevoir mon devis PDF par email
            </button>
            <button
              disabled={!isValid}
              onClick={() => alert("Paiement non configuré")}
              className="flex-1 border border-amber-500 text-amber-600 py-3 rounded-md disabled:opacity-50"
            >
              Payer l'acompte (Stripe)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSimulator;
