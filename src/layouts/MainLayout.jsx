import Nav from "../components/Nav";

export default function MainLayout(props) {
    return <section>
        <Nav />
        {props.children}
    </section>
}