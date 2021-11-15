import Link from "next/link";

const Index = () => (
	<nav>
		<Link href="/">Главная</Link> <Link href="/articles">Статьи</Link> <Link href="/users">Пользователи</Link>
	</nav>
)

export default Index;
