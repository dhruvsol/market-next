import React, { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./Group.module.sass";
import Icon from "../../Icon";

const Group = ({ className, item }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={cn(className, styles.group, { [styles.active]: visible })}>
      <div className={styles.head} onClick={() => setVisible(!visible)}>
        {item.title}
        <Icon name="arrow-bottom" size="10" />
      </div>
      <div className={styles.menu}>
        {item.menu.map((x, index) =>
          x.url.startsWith("http") ? (
            <Link href={x.url} key={index}></Link>
          ) : (
            <Link href={x.url} key={index}>
              <div className={styles.link}>{x.title}</div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Group;
