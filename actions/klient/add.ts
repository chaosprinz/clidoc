'use server'

import { db } from '@/utils/db'
import { clients } from '@/utils/db/schema/clients'

export async function addKlient(klientData: FormData) {
  const newKlient = await db.insert(clients).values({
    vorname: klientData.get('klient-vorname') as string,
    familienname: klientData.get('klient-familienname') as string,
  })
}
