import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals

const SuperHeroe = ({ hero }) => {
    return (
        <div className="card bg-light mb-3">
            <div className="card-header">{hero.HeroName}</div>
            <div className="card-header">{hero.HeroSurname}</div>
            <div className="card-header">{hero.email}</div>
        </div>
    )

}


export default SuperHeroe