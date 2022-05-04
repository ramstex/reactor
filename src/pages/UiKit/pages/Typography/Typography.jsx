import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

class PageUiKitTypography extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('page page-ui-kit-typography', className);
	}

	render() {
		return (
			<div className={this.classNameRoot()}>
				<MarkupSection title={'Ui Kit - Typography'}>
					<LocalNav />

					<h1>Заголовок 1 уровня</h1>
					<h2>Заголовок 2 уровня</h2>
					<h3>Заголовок 3 уровня</h3>
					<h4>Заголовок 4 уровня</h4>
					<h5>Заголовок 5 уровня</h5>
					<h6>Заголовок 6 уровня</h6>

					<p>
						Задача организации, в особенности же постоянный количественный рост и сфера нашей активности
						обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых
						участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что
						укрепление и развитие структуры позволяет оценить значение модели развития. Товарищи! новая
						модель организационной деятельности в значительной степени обуславливает создание новых
						предложений. Таким образом консультация с широким активом требуют определения и уточнения
						соответствующий условий активизации. Задача организации, в особенности же начало повседневной
						работы по формированию позиции способствует подготовки и реализации направлений прогрессивного
						развития.
					</p>

					<p className={'_sm'}>
						Товарищи! реализация намеченных плановых заданий позволяет оценить значение направлений
						прогрессивного развития. Таким образом сложившаяся структура организации способствует подготовки
						и реализации форм развития. Равным образом дальнейшее развитие различных форм деятельности
						играет важную роль в формировании соответствующий условий активизации.
					</p>

					<p className={'_lg'}>
						Равным образом консультация с широким активом влечет за собой процесс внедрения и модернизации
						соответствующий условий активизации. Таким образом новая модель организационной деятельности
						требуют определения и уточнения дальнейших направлений развития. Разнообразный и богатый опыт
						постоянный количественный рост и сфера нашей активности требуют определения и уточнения системы
						обучения кадров, соответствует насущным потребностям.
					</p>

					<p className={'_footnote'}>
						Задача организации, в особенности же сложившаяся структура организации играет важную роль в
						формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! новая
						модель организационной деятельности требуют определения и уточнения соответствующий условий
						активизации. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров
						кадров обеспечивает широкому кругу (специалистов) участие в формировании форм развития. Задача
						организации, в особенности же дальнейшее развитие различных форм деятельности требуют
						определения и уточнения системы обучения кадров, соответствует насущным потребностям. С другой
						стороны сложившаяся структура организации представляет собой интересный эксперимент проверки
						системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности
						же постоянный количественный рост и сфера нашей активности играет важную роль в формировании
						соответствующий условий активизации.
					</p>
				</MarkupSection>
			</div>
		);
	}
}

PageUiKitTypography.propTypes = {
	className: PropTypes.node,
};

export default PageUiKitTypography;
