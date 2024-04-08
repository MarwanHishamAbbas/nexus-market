import AdminDashboard from '@/components/admin/AdminDashboard'
import { FC } from 'react'

interface AdminPageProps {}

const AdminPage: FC<AdminPageProps> = ({}) => {
  return (
    <main>
      <AdminDashboard />
    </main>
  )
}

export default AdminPage
