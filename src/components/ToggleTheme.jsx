function ToggleTheme() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 border rounded"
    >
      Toggle Theme
    </button>
  )
}

export default ToggleTheme