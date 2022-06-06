## Введение

**HOC** для валидации.<br/>
Применяется к компоненту, который надо провалидировать.

## Подготовка валидируемого компонента

1) В валидируемом компоненте нужно в конструкторе создать **ref** с валидируемым элементом.
   Пример кода:
    ````
        constructor( props ) {
            super( props );

            this.input = React.createRef();
        }
    ````
   Так же нужно указать аттрибут **ref** для валидируемого элемента:
    ````
    ref={ this.input }
    ````
   Имя **"input"** выбрано для примера, оно может быть любым.


2) При монтировании компонент должен вызывать пропс **onMounted** функционального типа.
   Аргументом при вызове должен быть объект, содержащий валидируемый элемент из п.1
   в свойстве **target**.
   Пример кода:
    ````
        componentDidMount() {
            const { onMounted } = this.props;
            try {
                onMounted( { target: this.input.current } );
            } catch {
                console.warn('UiInput Warning: this.prop.onMounted is not a function', this);
            }
        }
    ````

3) Экспорт компонента нужно обернуть в **withValidation()**. Пример:
   ````
   export default withValidation( ExportedComponent );
	````
