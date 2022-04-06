import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@material-ui/core/styles';
import { Box, useMediaQuery } from '@material-ui/core';

// third-party
import Slider from 'react-slick';

// project imports
import ProductCard from 'ui-component/cards/ProductCard';
import axios from 'utils/axios';

// ===========================|| PRODUCT DETAILS - RELATED PRODUCTS ||=========================== //

const RelatedProducts = ({ id }) => {
    const theme = useTheme();

    const [related, setRelated] = React.useState([]);
    const matchDownXl = useMediaQuery(theme.breakpoints.down('xl'));
    const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
    const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    const getRelatedProducts = async () => {
        const response = await axios.post('/api/product/related', { id });
        setRelated(response.data.results);
    };

    React.useEffect(() => {
        getRelatedProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // React.useEffect(() => {
    //     if (matchUpXl) setItems(5);
    //     if (matchDownXl) setItems(4);
    //     if (matchDownLG) setItems(3);
    //     if (matchDownMD) setItems(2);
    //     if (matchDownSM) setItems(1);
    // }, [matchUpXl, matchDownXl, matchDownLG, matchDownMD, matchDownSM]);

    let noItems = 5;
    noItems = matchDownSM ? 1 : noItems;
    noItems = matchDownMD ? 2 : noItems;
    noItems = matchDownLG ? 3 : noItems;
    noItems = matchDownXl ? 4 : noItems;

    const settings = {
        dots: false,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '0px',
        slidesToShow: noItems
    };

    let productResult = '';
    if (related) {
        productResult = related.map((product, index) => (
            <Box key={index} sx={{ p: 1.5 }}>
                <ProductCard
                    key={index}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    offerPrice={product.offerPrice}
                    salePrice={product.salePrice}
                    rating={product.rating}
                />
            </Box>
        ));
    }

    return <Slider {...settings}>{productResult}</Slider>;
};

RelatedProducts.propTypes = {
    id: PropTypes.string
};

export default RelatedProducts;
