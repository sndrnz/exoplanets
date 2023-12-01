import Wrapper from "@/components/Wrapper";
import dictionary from "@/lib/data/dictionary";

export default async function DictionaryPage() {
  return (
    <Wrapper title="Dictionary">
      <div className="mx-auto max-w-4xl">
        <table className="text-left">
          <thead>
            <tr className="flex w-full p-4 text-xl sm:text-2xl">
              <th className="flex-1 text-left">Term</th>
              <th className="flex-1">Definition</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/20">
            {dictionary.map((item, index) => (
              <tr key={index} className="flex w-full p-4 text-left text-xl">
                <td className="flex-1 text-left">{item.term}</td>
                <td className="flex-1 text-left">{item.definition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
}
