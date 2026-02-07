import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <div className="max-w-[810px] mx-auto">
        {/* Header - Logo row */}
        <table className="w-full border-0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              {/* Left - University Logo */}
              <td width="270" className="align-top">
                <a href="https://duytan.edu.vn" target="_blank" rel="noopener noreferrer">
                  <div className="text-2xl font-bold text-black">DUY TAN</div>
                  <div className="text-xs text-gray-600">UNIVERSITY</div>
                </a>
              </td>
              {/* Middle - Empty */}
              <td width="270" className="align-center"></td>
              {/* Right - School Name */}
              <td width="270" className="align-top text-right">
                <a href="https://duytan.edu.vn" target="_blank" rel="noopener noreferrer">
                  <div className="text-right">
                    <div className="text-lg font-bold text-black tracking-tight">DTU</div>
                    <div className="text-xs text-gray-600">Research Group</div>
                  </div>
                </a>
              </td>
            </tr>
            {/* Black separator bar */}
            <tr>
              <td colSpan={3} className="bg-black h-2"></td>
            </tr>
          </tbody>
        </table>

        {/* Navigation Bar */}
        <table className="w-full border-0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr className="bg-black">
              <td width="135" className="text-center">
                <Link
                  to="/"
                  className={`block py-1.5 text-white font-bold text-sm no-underline hover:bg-gray-800 ${isActive('/') ? 'bg-gray-800' : ''}`}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Research
                </Link>
              </td>
              <td width="135" className="text-center">
                <Link
                  to="/people"
                  className={`block py-1.5 text-white font-bold text-sm no-underline hover:bg-gray-800 ${isActive('/people') ? 'bg-gray-800' : ''}`}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  People
                </Link>
              </td>
              <td width="135" className="text-center">
                <Link
                  to="/news"
                  className={`block py-1.5 text-white font-bold text-sm no-underline hover:bg-gray-800 ${isActive('/news') ? 'bg-gray-800' : ''}`}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  News
                </Link>
              </td>
              <td width="135" className="text-center">
                <Link
                  to="/publications"
                  className={`block py-1.5 text-white font-bold text-sm no-underline hover:bg-gray-800 ${isActive('/publications') ? 'bg-gray-800' : ''}`}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Publications
                </Link>
              </td>
              <td width="135" className="text-center">
                <a
                  href="https://cee.duytan.edu.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-1.5 text-white font-bold text-sm no-underline hover:bg-gray-800"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  CEE
                </a>
              </td>
              <td width="135" className="text-center">
                <a
                  href="https://duytan.edu.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-1.5 text-white font-bold text-sm no-underline hover:bg-gray-800"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  DTU
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Spacer */}
        <div className="h-4"></div>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <div className="mt-12 py-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © 2025 Interfacial Water Research Group | Duy Tan University
          </p>
        </div>
      </div>
    </div>
  )
}

export default Layout
