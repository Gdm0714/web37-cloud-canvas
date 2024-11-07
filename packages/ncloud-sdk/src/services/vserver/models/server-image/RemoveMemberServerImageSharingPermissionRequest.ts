type RemoveMemberServerImageSharingPermissionRequest = {
    /**
     * 리전 코드
     * 공유 권한을 제거할 회원 서버 이미지 인스턴스의 리전(Region) 결정 가능
     * regionCode는 getRegionList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist
     * @default getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 회원 서버 이미지 인스턴스 번호
     * memberServerImageInstanceNo는 getMemberServerImageInstanceList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-serverimage-getmemberserverimageinstancelist
     */
    memberServerImageInstanceNo: string;

    /**
     * 대상 로그인 ID 리스트
     * 제거할 대상의 로그인 ID 리스트 지정
     * ex) targetLoginIdList.1=id1@email.com&targetLoginIdList.2=id2@email.com
     */
    targetLoginIdList?: string[];

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
