import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
  faSpinner
} from "@fortawesome/free-solid-svg-icons";

export default function LoadingBox() {
    return (
        <div>
            <FontAwesomeIcon icon={faSpinner} ></FontAwesomeIcon>
        </div>
    )
}
