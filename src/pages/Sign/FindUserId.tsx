import { TabContainer, TabPanel } from '../../components'
import { FindIdByPhone } from '../../components';

const FindUserId = () => {
    return (
        <div id="find-id">
            <span className="title">아이디 찾기</span>
            <TabContainer>
                <TabPanel label="휴대전화로 찾기">
                    <FindIdByPhone />
                </TabPanel>
                <TabPanel label="이메일로 찾기">이메일 전송</TabPanel>
            </TabContainer>
        </div>
    )
}

export default FindUserId;