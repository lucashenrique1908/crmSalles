import Card from "../components/Card/Card"
import Button from "../components/Button/Button"

function Dashboard() {
  function handleNewLead() {
    console.log("Botão Novo Lead clicado!")
  }

  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <h2 className="text-sm font-medium text-slate-500">Total de leads</h2>
          <p className="mt-2 text-2xl font-semibold text-slate-800">1.284</p>
        </Card>
        <Card>
          <h2 className="text-sm font-medium text-slate-500">Novos leads</h2>
          <p className="mt-2 text-2xl font-semibold text-slate-800">86</p>
        </Card>
        <Card>
          <h2 className="text-sm font-medium text-slate-500">Taxa de conversão</h2>
          <p className="mt-2 text-2xl font-semibold text-slate-800">12,5%</p>
        </Card>
      </div>
      <Button onClick={handleNewLead} disabled={false}>
        Novo Lead
      </Button>
    </section>
  )
}

export default Dashboard;
