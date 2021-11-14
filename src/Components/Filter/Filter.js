import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { filterValue } from "../../redux/contacts/contacts-selectors";
import s from "./Filter.module.css";
import { changeFilter } from "../../redux/contacts/contacts-actions";

export default function Filter() {
  const value = useSelector(filterValue);
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
// const mapStateToProps = (state) => ({
//   value: state.contacts.filter

// })

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.target.value))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Filter)

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
