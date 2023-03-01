import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";
import axios from "axios";



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    let slicedPages;
    let curPage = props.currentPage;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2);
    }

    return (
        <>
            <div>
                <div>
                    {slicedPages.map((p, index) => {
                        return <span key={index} className={props.currentPage === p ? styles.selectedPage : undefined}
                            onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                    })}
                </div>

                {
                    props.users.map((u, index) => <div key={index}>
                        <span>
                            <div>
                                <NavLink to={'/profile/*' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '97d8d995-767f-4066-8266-545c44711929'
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.unfollow(u.id);
                                                }
                                            });


                                    }}>Unfollow</button>
                                    : <button onClick={() => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '97d8d995-767f-4066-8266-545c44711929'
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.follow(u.id);
                                                }
                                            });

                                    }}>Follow</button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{ /* u.location.country */}</div>
                                <div>{ /* u.location.city */}</div>
                            </span>
                        </span>
                    </div>)
                }
            </div >
        </>
    )
}

export default Users;