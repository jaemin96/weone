import { TabContainer, TabPanel } from '../../components'

const FindUser = () => {
    return (
        <div>
            <TabContainer>
                <TabPanel label="휴대전화로 찾기">휴대전화 인증</TabPanel>
                <TabPanel label="이메일로 찾기">이메일 전송</TabPanel>
            </TabContainer>
        </div>
    )
}

export default FindUser;