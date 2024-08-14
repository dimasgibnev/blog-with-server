import PropTypes from 'prop-types';
import { ROLE } from './role';

const ROLE_ID = PropTypes.oneOf(Object.values(ROLE));
export const PROP_TYPE = {
	ROLE_ID,
	ROLE: PropTypes.shape({
		id: ROLE_ID,
		name: PropTypes.string.isRequired,
	}),
	ERROR_TYPE: PropTypes.oneOfType([PropTypes.string, PropTypes.exact(null)]),
	COMMENT: PropTypes.oneOfType([
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			author: PropTypes.string.isRequired,
			content: PropTypes.string.isRequired,
			publishedAt: PropTypes.string.isRequired,
		}),
		PropTypes.array,
	]),
	POST: PropTypes.shape({
		id: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		publishedAt: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
	}),
};
