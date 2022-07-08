import { AddEdit } from '../../../component/users';
import { userService } from '../../../service';

export default AddEdit;

export async function getServerSideProps({ params }) {
    const user = await userService.getById(params.id);

    return {
        props: { user }
    }
}