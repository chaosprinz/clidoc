import { auth } from '@/utils/auth'

export default async function Home() {
  const session = await auth()
  console.log('session', session)
  return <div>Bubu</div>
}
