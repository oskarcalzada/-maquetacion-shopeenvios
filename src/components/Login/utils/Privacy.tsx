import { Dialog, DialogContent } from "@mui/material";

export default function Privacy(props: any) {

    const { open, onClose } = props;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
        >
            <DialogContent>
                <h2>Políticas de Privacidad</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit purus egestas purus semper fringilla. Aenean lobortis vitae ipsum in molestie. Nam aliquet leo at arcu tristique ultricies. Vestibulum ut libero eget elit ultricies rhoncus. Proin viverra sem hendrerit ex pretium molestie. Suspendisse molestie ornare ligula at sodales. Sed eu nibh non arcu venenatis pellentesque. Vestibulum egestas scelerisque aliquam.
                </p>
                <p>
                Integer turpis diam, tincidunt vel dolor at, blandit malesuada lectus. Sed nec ligula vel neque viverra molestie a sit amet lacus. Vivamus nec neque nisl. Nulla efficitur libero eget iaculis euismod. Aenean dignissim felis imperdiet, blandit quam at, ultricies ligula. Fusce semper lectus mattis, tincidunt libero ac, scelerisque felis. Donec at leo suscipit, feugiat ex sed, pellentesque ante. Aenean ut ornare urna. Vestibulum et orci at enim accumsan tempor. Vivamus metus nisl, fringilla id dui vitae, vulputate efficitur nisi. Sed eget accumsan urna. Donec nunc nunc, placerat vel lacus sit amet, laoreet luctus massa. In et metus nec nunc gravida pretium. In dictum leo et sapien venenatis luctus. Phasellus ultrices efficitur tortor, ut ultrices sem lobortis ut. Sed euismod nulla non ante finibus consectetur.
                </p>
                <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas suscipit quam id turpis mollis dignissim. Etiam id malesuada ante. Donec posuere dolor id dui feugiat, a aliquam nisi dapibus. Duis eget massa facilisis, iaculis lectus nec, fermentum velit. Quisque finibus sed urna vitae auctor. Mauris accumsan lorem vel dolor imperdiet, in auctor erat porta. Vivamus quis vestibulum dolor, tincidunt molestie enim.
                </p>
                <p>
                Nam sit amet suscipit enim. Aliquam non odio eget magna porttitor hendrerit id ac ex. Praesent lacinia euismod ipsum at facilisis. Curabitur ullamcorper bibendum urna at tempor. Maecenas convallis arcu sit amet rhoncus consectetur. In eu felis quis nibh pellentesque gravida sit amet in purus. Phasellus accumsan eu augue vel tempor. Suspendisse sit amet bibendum massa. Morbi et leo ex. Nulla consequat, elit et auctor lobortis, lacus ante placerat velit, ut consectetur lacus nunc id odio. Suspendisse gravida semper auctor. Vivamus ornare lorem a tortor iaculis, ut gravida tortor imperdiet. Aliquam ornare ex eros, in feugiat leo tempus eu. Vivamus finibus sed risus eu condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <p>
                Nam mattis nunc sed nisl cursus, in bibendum massa condimentum. Cras dignissim odio lectus, et congue eros tristique vitae. Quisque ultrices ante justo, vel tempus neque tincidunt vitae. Fusce nec interdum lacus. Sed aliquam semper neque, sodales sollicitudin diam rutrum in. Phasellus sed ante ultricies erat tempor sodales. Mauris quis ante a urna vestibulum gravida. Quisque id risus metus. Duis fringilla mauris metus, vel pharetra velit lobortis eleifend. Phasellus dolor ante, fringilla ut erat vitae, tempus elementum velit. Aliquam erat volutpat.
                </p>
            </DialogContent>
        </Dialog>
    );
}