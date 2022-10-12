# Image-Charts Enterprise Support for Office 365

This Office 365 extension brings [Image-Charts signed urls for paid customers](https://documentation.image-charts.com/enterprise/).

# Getting Started

To use Image-Charts function on Excel web (Office 365), please:

- Download the [manifest.xml](https://teal-jalebi-8abbe6.netlify.app/manifest.xml) file
- Open Excel Office 365 web version
- Click on `Insert` > `Office Add-ins` > `Upload My Add-in`
- Select the `manifest.xml` you downloaded
- Click on `Upload` button

You should now be able to use the `IMAGECHARTS.SIGN_URL(chart_url; account_id; secret_key)` excel formula.

# Usage

### `IMAGECHARTS.SIGN_URL(chart_url; account_id; secret_key)`

Use this function to sign an url for an enterprise account. Please [see the enterprise documentation](https://documentation.image-charts.com/enterprise/) for the benefits of having an enterprise account.
Parameters:
- `link`: the image-charts link you want to use, with all the parameters except `icac` & `ichm`. Please [see the documentation](https://documentation.image-charts.com/) for the available parameters.
- `account_id`: your image-charts enterprise account_id, please subscribe to a plan on [Image Charts website](https://www.image-charts.com/) us if you want to use an enterprise account.
- `secret_key`: this is the key provided with your account.
