function Card({ children }) {
  return (
    <div className="bg-white rounded-lg p-6 border border-slate-200">
      {children}
    </div>
  )
}

export default Card