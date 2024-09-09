import React from 'react'
import { addKlient } from '@/actions/klient/add'

const KlientCreate = () => {
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
    </div>
  )
}

export default KlientCreate
