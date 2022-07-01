import React, { useState } from 'react';

import BaseDropdown from '../../../../components/Base/Dropdown/Dropdown.jsx';
import UiButton from '../../../../components/Ui/Button/Button.jsx';
import MarkupContainer from '../../../../components/Markup/Container/Container.jsx';
import { Row, Col } from '../../../../components/Grid/Grid.jsx';
import LocalLayout from '../../components/Layout/Layout.jsx';
import BaseLink from '../../../../components/Base/Link/Link.jsx';

const PageUiKitDropdown = () => {
	const [ opened, setOpened ] = useState( false );

	const onOpenClick = () => {
		setOpened( true );
	};

	const onCloseClick = () => {
		setOpened( false );
	};

	const onToggleClick = () => {
		setOpened( !opened );
	};

	return (
		<LocalLayout title={ 'Dropdown' }>
			<MarkupContainer>
				<Row className={ '_mb_3' }>
					<Col>
						<UiButton onClick={ onOpenClick }>Открыть</UiButton>
					</Col>

					<Col>
						<UiButton onClick={ onCloseClick }>Закрыть</UiButton>
					</Col>

					<Col>
						<UiButton onClick={ onToggleClick }>Переключить</UiButton>
					</Col>
				</Row>

				<Row>
					<Col>
						<BaseDropdown opened={ opened }>
							<p>
								Задача
								<BaseLink href={ 'https://google.com' }
										  target={ '_blank' }>организации</BaseLink>
								, в особенности же постоянный
								количественный рост и сфера нашей активности
								обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых
								участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна,
								что укрепление и развитие структуры позволяет оценить значение модели развития.
								Товарищи!
								новая модель организационной деятельности в значительной степени обуславливает создание
								новых
								предложений. Таким образом консультация с широким активом требуют определения и
								уточнения соответствующий условий активизации. Задача организации, в особенности же
								начало
								повседневной работы по формированию позиции способствует подготовки и реализации
								направлений
								прогрессивного
								развития.
							</p>

							<p className={ '_sm' }>
								Товарищи! реализация намеченных плановых заданий позволяет оценить значение направлений
								прогрессивного развития. Таким образом сложившаяся структура организации способствует
								подготовки
								и реализации форм развития. Равным образом дальнейшее развитие различных форм
								деятельности
								играет важную роль в формировании соответствующий условий активизации.
							</p>
						</BaseDropdown>
					</Col>
				</Row>
			</MarkupContainer>
		</LocalLayout>
	);
};

export default PageUiKitDropdown;
