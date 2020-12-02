import queryString from 'query-string'


export default props => {

    console.log('Este es el juego de props de RRD', props)

    const values = queryString.parse(props.location.search)

    return (
        <>
            <h1>¡Query String y Route Params!</h1>
            <p>Los query strings se encuentran en <code>props.location.search</code></p>
            <p>Los de este componente son: {props.location.search}</p>
            <p>...aunque la dependencia <code>query-string</code> te los descompone!: {values.name}, {values.age}...</p>

            <hr />
            <p>El route param se encuentra en <code>props.match.params</code>, por ejemplo: {props.match.params.flightType}</p>
        </>
    )
}