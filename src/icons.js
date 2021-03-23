import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCheckCircle,
  faEdit,
  faExclamationTriangle,
  faSquare,
  faTrash,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { CATEGORY, URGENCY, ACTIONS } from "./constants";

export const icons = {
  [URGENCY.LOW]: (
    <FontAwesomeIcon className="grey" icon={faExclamationTriangle} />
  ),
  [URGENCY.MEDIUM]: (
    <FontAwesomeIcon className="orange" icon={faExclamationTriangle} />
  ),

  [URGENCY.HIGH]: (
    <FontAwesomeIcon className="red" icon={faExclamationTriangle} />
  ),

  [CATEGORY.PERSONAL]: <FontAwesomeIcon className="blue" icon={faUser} />,
  [CATEGORY.ACADEMIC]: <FontAwesomeIcon className="grey" icon={faBook} />,
  [CATEGORY.SOCIAL]: <FontAwesomeIcon className="pink" icon={faUsers} />,
  [ACTIONS.EDIT]: <FontAwesomeIcon icon={faEdit} />,
  [ACTIONS.DELETE]: <FontAwesomeIcon icon={faTrash} />,
  [ACTIONS.BULKCOMPLETE]: <FontAwesomeIcon icon={faCheckCircle} />,
  [ACTIONS.BULKINCOMPLETE]: <FontAwesomeIcon icon={faSquare} />,
  [ACTIONS.BULKDELETE]: <FontAwesomeIcon icon={faTrash} />,
};
