export type TLogoutQueryModel = () => object;

export type TLogoutModel = () => {
	logout: TLogoutQueryModel;
};
