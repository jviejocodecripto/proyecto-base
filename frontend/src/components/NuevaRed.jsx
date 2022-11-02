import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useState } from 'react';
export const NuevaRed = () => {
    const [mensaje, setMensaje] = useState("")
    const sendServer = async (datos) => {
        const response = await fetch("http://localhost:3333/network/create",
            {
                method: "POST",
                body: JSON.stringify(datos),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        const datosResponse = await response.json()
        setMensaje(JSON.stringify(datosResponse))
        console.log(datosResponse)
    }
    const mutation = useMutation(sendServer)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({

    });

    const submit = (data) => {
        mutation.mutate(data)

    }
    return <div>
        {mensaje != "" ? <p  className='alert alert-danger'>{mensaje}</p> : ""}
        <form onSubmit={handleSubmit((data) => submit(data))}>
            <div>
                <label>Cuenta</label>
                <input className='form-control'
                    defaultValue="0x9041142ec77b2f07032493Bf5e870Ae1D065c6F4"
                    {...register('cuenta', { required: true })} />
            </div>
            <div>
                <label>Numero de Red</label>
                <input defaultValue="1" className='form-control' {...register('network', { required: true })} />
            </div>
            <input type="submit" value="enviar" />
        </form>
    </div>
}