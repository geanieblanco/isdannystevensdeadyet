import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StatusForm from "../organisms/StatusForm";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
        navigate('/dashboard')
    }

    if (!authToken) {
        navigate('/auth')
    }
  }, [])

  return (
      <section>
        <StatusForm/>
      </section>
  )
  }