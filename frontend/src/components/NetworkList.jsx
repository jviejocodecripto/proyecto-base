import { useQuery, useMutation } from "react-query"
import { Link} from 'react-router-dom'
import { useState } from "react"



const listaNetwork = async () => {
    const response = await fetch("http://localhost:3333/network")
    const datos = await response.json();
    return datos;
}




export const NetworkList = () => {
    const [mensaje, setMensaje] = useState("")

    const sendServer = async (network) => {
        console.log(network)
        const response = await fetch(`http://localhost:3333/network/${network}`,
            {
                method: "DELETE",
            }
        )
        const datosResponse = await response.json()
        setMensaje(JSON.stringify(datosResponse))
        console.log(datosResponse)
    }
    const mutation = useMutation(sendServer)



    const { data, isLoading } = useQuery(["redes"], listaNetwork)

    const borrar = (network) => {
        console.log("network", network)
        mutation.mutate(network)
    }
    if (isLoading) return <p>Cargando</p>
    return <div>
        <p>Lista de redes</p>
        <Link   to ="/nuevaRed">Nueva Red</Link>
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>numero</th>
                    <th>chainId</th>
                    <th>cuenta</th>

                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => <tr key={index}>
                        <td><button className="btn btn-primary" 
                                onClick={() => borrar(item.numero)}>Borrar</button></td>
                        <td>{item.numero}</td>
                        <td>{item.chainid}</td>
                        <td>{item.cuentas.map((cuenta, index2) => <div key={index2}>{cuenta}</div>)}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}