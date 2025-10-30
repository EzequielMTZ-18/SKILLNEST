import { useParams, useNavigate, useLocation } from "react-router-dom";
import DataV from '../data/dataV.js';

const InfoCard = () => {
    const { id } = useParams()
    const currentId = Number(id)

    const navigate = useNavigate()
    const location = useLocation()


    const vehicle = DataV[currentId]
    if (!vehicle) return <p>Vehículo no encontrado</p>


    const vehicleName = location.state?.name || vehicle.name
    const imgUrl = location.state?.imageUrl || vehicle.url

    const goPrev = () => {
        const prevId = currentId - 1
        if (prevId < 0) return

        const prevVehicle = DataV[prevId]

        navigate(`/vehicle/${prevId}/${encodeURIComponent(prevVehicle.name)}`, {
            state: { name: prevVehicle.name, imageUrl: prevVehicle.url }
        })
    }

    const goNext = () => {
        const nextId = currentId + 1
        if (nextId >= DataV.length) return;

        const nextVehicle = DataV[nextId]

        navigate(`/vehicle/${nextId}/${encodeURIComponent(nextVehicle.name)}`, {
            state: { name: nextVehicle.name, imageUrl: nextVehicle.url }
        })
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>{vehicleName}</h2>
            <img src={imgUrl} alt={vehicleName} width="500" style={{ borderRadius: "10px" }} />
            <div style={{ marginTop: "20px" }}>
                <button onClick={goPrev} disabled={currentId === 0}>
                    Anterior
                </button>
                <button onClick={() => navigate("/home")}>Inicio</button>
                <button onClick={goNext} disabled={currentId === DataV.length - 1}>
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default InfoCard;
