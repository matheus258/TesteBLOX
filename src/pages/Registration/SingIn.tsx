import ButtonAppBar from "../../components/AppBar/AppBar";
import FormSignUp from "../../components/FormRegister/FormRegister";

export function SingIn() {
    return (
        <>
            <ButtonAppBar text={'Entrar'} rota={"/"} title={"BLOX"} />
            <FormSignUp />
        </>
    )
}