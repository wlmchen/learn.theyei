const people = [
  {
    name: 'Elau Musk',
    school: 'Dublin High',
    names: ['Grace Liu', 'Evan Ai', 'Frank Xiao', 'Anna Hsu'],
  },
  {
    name: 'Sandwich',
    school: 'Dublin High',
    names: ['Ethan Lau', 'Maggie Guan', 'Kyle Shi'],
  },
  {
    name: 'Toga 1',
    school: 'Saratoga High',
    names: ['Andy Chen', 'Sajiv Shah', 'Nila Mishra', 'Marcus Kuo'],
  },
  {
    name: "This isn't OSB",
    school: 'Lynbrook High',
    names: ['Jonathan Huang', 'Jonathan Qin', 'Richard Niu'],
  },
]

export default function RecapPodium() {
  return (
    <div className="py-8 flex flex-col">
      <h1 className="mb-3 text-xl font-medium">2nd Annual EconBowl Podium</h1>
      <div className="-my-2 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-yei-primary-main text-center lg:text-left text-white">
                <tr>
                  <th
                    scope="col"
                    className="px-4 xl:px-6 py-3 text-xs font-medium uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-4 xl:px-6 py-3 text-xs font-medium uppercase tracking-wider"
                  >
                    Team Name
                  </th>
                  <th
                    scope="col"
                    className="hidden lg:block px-4 xl:px-6 py-3 text-xs font-medium uppercase tracking-wider"
                  >
                    School
                  </th>
                  <th
                    scope="col"
                    className="px-4 xl:px-6 py-3 text-xs font-medium  uppercase tracking-wider"
                  >
                    Members
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((team, i) => (
                  <tr
                    key={team.name}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 xl:px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900">
                      {i + 1}
                    </td>
                    <td className="px-4 xl:px-6 py-4 whitespace-nowrap text-xs text-gray-900 font-medium">
                      {team.name}
                    </td>
                    <td className="hidden lg:block px-4 xl:px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      {team.school}
                    </td>
                    <td className="px-4 xl:px-6 py-4 whitespace-nowrap text-xs break-all text-gray-500">
                      {team.names.slice(0, 2).join(', ')} <br />
                      {team.names.slice(2).join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
