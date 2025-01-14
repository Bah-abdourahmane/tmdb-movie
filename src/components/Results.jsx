"use client";
import Card from "./Card";

export default function Results({ results }) {
  if (!results || results.length === 0) {
    return <div className="p-4 text-center">No Results Found</div>;
  }
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
