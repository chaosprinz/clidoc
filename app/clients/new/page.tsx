import React from 'react'
import { addKlient } from '@/actions/klient/add'
import { db } from '@/utils/db'

const KlientCreate = async () => {
  const clients = await db.query.clients.findMany()

  return (
    <div>
      <form action={addKlient}>
        <fieldset className="flex w-[19rem] gap-2">
          <label htmlFor="klient-vorname" className="flex-grow">
            Vorname:
          </label>
          <input
            className="bg-slate-300 dark:bg-slate-600"
            type="text"
            name="klient-vorname"
            id="klient-vorname"
            autoFocus
          />
        </fieldset>

        <fieldset className="flex w-[19rem] gap-2">
          <label htmlFor="klient-famielienname" className="flex-grow">
            Familienname:
          </label>
          <input
            className="bg-slate-300 dark:bg-slate-600"
            type="text"
            name="klient-familienname"
            id="klient-familienname"
          />
        </fieldset>

        <button type="submit">Speichern</button>
      </form>
      <h2 className="mt-4">Klienten</h2>
      <ul>
        {clients.map((klient) => (
          <li key={klient.id}>
            {klient.vorname} {klient.familienname}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default KlientCreate
