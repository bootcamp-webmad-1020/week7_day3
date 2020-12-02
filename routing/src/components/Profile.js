export default ({ username, birth, height }) => {
    return (
        <>
            <h1>¡Hola, {username}!</h1>
            <p>Vemos que has nacido el {birth.toLocaleString('es-ES')}</p>
            <p>¡Qué bien te ves con tu {height} de altura aw :3</p>
        </>
    )
}