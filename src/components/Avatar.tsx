import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    // src: string;
    // alt?: string;
}

export function Avatar({hasBorder = true, ...props}: AvatarProps) {
    //console.log(props)

   // esta forma deu lugar ao destructuring {hasBorder.src}
   //hasBorder = true , dá um valor padrão
   // const hasBorder = props.hasBorder !== false ; 
    return(
    <div>
        <img 
            className={hasBorder ? 
            styles.avatarWithBorder:styles.avatar} 
            {...props}
            // src={src} 
            // alt={alt} 
        />
    </div>
    );
}