import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useLocation, useNavigate } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

  const [isAdmin, setIsAdmin] = useState(false)
  const [shows, setShows] = useState([])
  const [favorites, setFavorites] = useState([])

  const {user} = useUser()
  const {getToken} = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const fetchIsAdmin = async () => {
    try {
      const {data} = await axios.get('/api/admin/is-admin', {headers: {Authorization: `Bearer ${await getToken()}`}})
      setIsAdmin(data.isAdmin)

      if(!data.isAdmin && location.pathname.startsWith('/admin')) {
        
      }
    } catch (error) {
      console.error(error)
    }
  }

  const value = {axios}
  return (
    <AppContext.Provider value={value}>
      { children }
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
