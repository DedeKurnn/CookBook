import { useState, useContext, useEffect } from "react";
import { RecipeContext } from "../../context";
import PropTypes from "prop-types";
import { Checkbox } from "@material-tailwind/react";

const CheckboxFilter = ({ items }) => {
	const [checkboxValues, setCheckboxValues] = useState([' ']);
    const [type, setType] = useState('');
    const ctx = useContext(RecipeContext)

	const checkboxChangeHandler = (e) => {
		const value = e.target.value;
        if (e.target.checked) {
            setType(e.target.dataset.type);
            setCheckboxValues([...checkboxValues, value]);
        } else {
            setCheckboxValues(prevValues => prevValues.filter(item => item !== value));
        }
	};

    useEffect(() => {
        if (type !== '') {
            ctx.onQuery(checkboxValues, type)
        }
    }, [type, checkboxValues, ctx])

	return (
		<div>
			<ul className="columns-3">
				{items.map((item) => (
					<li key={item.name}>
						<Checkbox
							id={item.name}
							label={item.name}
							value={item.name}
                            data-type={item.type}
							checked={checkboxValues.includes(item.name)}
                            onChange={checkboxChangeHandler}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

CheckboxFilter.propTypes = {
	items: PropTypes.array,
    separator: PropTypes.string,
};

export default CheckboxFilter;
