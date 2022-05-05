import Thresh, { basicWidgets } from 'clia-thresh-lib'
import { Colors } from '../../config'
import Title from '../../widgets/Title'
import Box from '../../widgets/Box'

const { Page, AppBar, QrImage } = basicWidgets

export default class QrImageDemo extends Thresh.Widget <any, any> {
  render () {
    return (
      <Page
        backgroundColor={Colors.Pagebg}
        appBar={
          <AppBar title="QrImage 二维码组件" />
        }
      >
        <Title title="二维码" />
          <Box>
            <QrImage text="http://dmimg.5054399.com/allimg/pkm/pk/22.jpg" 
                    backgroundColor={0xffFFFBF9}  
                    foregroundColor={0xff333333} 
                    />
          </Box>
          <Box>
            <QrImage text="http://dmimg.5054399.com/allimg/pkm/pk/22.jpg" 
                    backgroundColor={0xffFFFBF9}  
                    foregroundColor={0xff333333} 
                    embeddedImageUrl="http://dmimg.5054399.com/allimg/pkm/pk/22.jpg"
                    embeddedImageHeight={25}
                    embeddedImageWidth={25}
                    />
          </Box>
      </Page>
    )
  }
}
