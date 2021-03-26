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
    <FontAwesomeIcon className="cgrey" icon={faExclamationTriangle} />
  ),
  [URGENCY.MEDIUM]: (
    <FontAwesomeIcon className="corange" icon={faExclamationTriangle} />
  ),

  [URGENCY.HIGH]: (
    <FontAwesomeIcon className="cred" icon={faExclamationTriangle} />
  ),

  [CATEGORY.PERSONAL]: <FontAwesomeIcon className="cblue" icon={faUser} />,
  [CATEGORY.ACADEMIC]: <FontAwesomeIcon className="cgrey" icon={faBook} />,
  [CATEGORY.SOCIAL]: <FontAwesomeIcon className="cpink" icon={faUsers} />,
  [ACTIONS.EDIT]: <FontAwesomeIcon icon={faEdit} />,
  [ACTIONS.DELETE]: <FontAwesomeIcon icon={faTrash} />,
  [ACTIONS.BULKCOMPLETE]: <FontAwesomeIcon icon={faCheckCircle} />,
  [ACTIONS.BULKINCOMPLETE]: <FontAwesomeIcon icon={faSquare} />,
  [ACTIONS.BULKDELETE]: <FontAwesomeIcon icon={faTrash} />,
};
