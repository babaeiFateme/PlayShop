import ILoginFormType from "@/core/types/login-form.types"

type TUserStore = {
    user: ILoginFormType | null
    setUserReducer: (user: ILoginFormType) => void
    logoutUser: () => void
}

export default TUserStore