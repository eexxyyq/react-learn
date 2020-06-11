import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://pureimg.com/public/uploads/large/21497053610tyhswepood20egy3m82fjhyszgjin6lq7fple6jjzooxs8hk2xtlfprn0x4pn60horblgz9d2jvfz476mvhwp2glexdux0iifv7j.jpg"
                    alt="#"/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo