import {Wrapper} from "@/app/(browse)/_components/sidebar/wrapper";

import {Toggle} from "@/app/(browse)/_components/sidebar/toggle";
import {Recommended} from "@/app/(browse)/_components/sidebar/recommended";
import {getRecommended} from "@/lib/recommended-service";
export const Sidebar = async () => {
    const recommended = await getRecommended()

    return (
        <Wrapper>
            <Toggle/>
            <div className=''>
                <Recommended data={recommended}/>
            </div>
        </Wrapper>
    );
}