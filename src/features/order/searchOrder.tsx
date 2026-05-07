import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: ChangeEvent) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
