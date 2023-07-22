export type TLogout = () => object;

export type TLogoutModel = () => {
	logout: TLogout;
};
