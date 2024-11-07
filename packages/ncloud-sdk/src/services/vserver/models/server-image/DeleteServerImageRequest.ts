type DeleteServerImageRequest = {
    /**
     * 리전 코드
     * 삭제할 서버 이미지의 리전(Region) 결정 가능
     * regionCode는 getRegionList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist
     * @default getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 삭제할 서버 이미지 번호 리스트
     * serverImageNo는 getServerImageList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-serverimage-getserverimagelist
     * ex) serverImageNoList.1=1234&serverImageNoList.2=2345
     */
    serverImageNoList: string[];

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
