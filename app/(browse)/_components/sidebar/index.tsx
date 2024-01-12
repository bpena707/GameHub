import {Wrapper} from "@/app/(browse)/_components/sidebar/wrapper";

import {Toggle} from "@/app/(browse)/_components/sidebar/toggle";
import {Recommended} from "@/app/(browse)/_components/sidebar/recommended";
export const Sidebar = () => {
    return (
        <Wrapper>
            <Toggle/>
            <div className=''>
                <Recommended/>
            </div>
        </Wrapper>
    );
}