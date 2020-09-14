# API / Named Ranges

## Google Apps Script Documentation

You can learn more about the APIs available here in [Google's documentation](https://developers.google.com/apps-script/reference/spreadsheet).

## Named Ranges

#### Values

<table>
  <thead>
    <tr>
      <th style="text-align:left">Reference</th>
      <th style="text-align:left">Format</th>
      <th style="text-align:left">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>v_Version</b>
      </td>
      <td style="text-align:left"><b>String</b>
      </td>
      <td style="text-align:left">
        <p>A string that represents the version of the current spreadsheet.</p>
        <p>Example: &apos;3.3.0&apos;</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>v_Today</b>
      </td>
      <td style="text-align:left"><b>Number</b>
      </td>
      <td style="text-align:left">This value represents today&apos;s date in integer format.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>v_ReportableCategorySymbol</b>
      </td>
      <td style="text-align:left"><b>String</b>
      </td>
      <td style="text-align:left">Value: &#x2727;</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>v_NonReportableCategorySymbol</b>
      </td>
      <td style="text-align:left"><b>String</b>
      </td>
      <td style="text-align:left">Value: &#x203B;</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>v_DebtAccountSymbol</b>
      </td>
      <td style="text-align:left"><b>String</b>
      </td>
      <td style="text-align:left">Value: &#x25D8;</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>v_CategoryGroupSymbol</b>
      </td>
      <td style="text-align:left"><b>String</b>
      </td>
      <td style="text-align:left">Value: &#x2726;</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>v_ApprovedSymbol</b>
      </td>
      <td style="text-align:left"><b>String</b>
      </td>
      <td style="text-align:left">Value: &#x2705;</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>v_PendingSymbol</b>
      </td>
      <td style="text-align:left"><b>String</b>
      </td>
      <td style="text-align:left">Value: &#x1F17F;&#xFE0F;</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>v_BreakSymbol</b>
      </td>
      <td style="text-align:left"><b>String</b>
      </td>
      <td style="text-align:left">Value: *&#xFE0F;&#x20E3;</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>v_AccountTransfer</b>
      </td>
      <td style="text-align:left"><b>String</b>
      </td>
      <td style="text-align:left">Value: &#x2195;&#xFE0F; Account Transfer</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>v_BalanceAdjustment</b>
      </td>
      <td style="text-align:left"><b>String</b>
      </td>
      <td style="text-align:left">Value: &#x1F522; Balance Adjustment</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>v_StartingBalance</b>
      </td>
      <td style="text-align:left"><b>String</b>
      </td>
      <td style="text-align:left">Value: &#x27A1;&#xFE0F; Starting Balance</td>
    </tr>
  </tbody>
</table>

#### Ranges \(single column\)

| Reference | Format | Notes |
| :--- | :--- | :--- |
| **trx\_Dates** | **Range** | Column of Dates on the Transactions tab |
| **trx\_Outflows** | **Range** | Column of Outflows on the Transactions tab |
| **trx\_Inflows** | **Range** | Column of Inflows on the Transactions tab |
| **trx\_Categories** | **Range** | Column of Categories on the Transactions tab |
| **trx\_Accounts** | **Range** | Column of Accounts on the Transactions tab |
| **trx\_Statuses** | **Range** | Column of Statuses on the Transactions tab |
| **ntw\_Dates** | **Range** | Column of Dates on the Net Worth Reports tab |
| **ntw\_Amounts** | **Range** | Column of Amounts on the Net Worth Reports tab |
| **ntw\_Categories** | **Range** | Column of Categories on the Net Worth Reports tab |
| **cts\_Dates** | **Range** | Column of Dates on the Category Transfers tab |
| **cts\_Amounts** | **Range** | Column of Amounts on the Category Transfers tab |
| **cts\_FromCategories** | **Range** | Column of From Categories on the Category Transfers tab |
| **cts\_ToCategories** | **Range** | Column of to Categories on the Category Transfers tab |
| **cfg\_Accounts** | **Range** | Range of Bank Accounts on the Configuration tab |
| **cfg\_Cards** | **Range** | Range of Credit Cards on the Configuration tab |

#### Ranges \(two dimensional\)

| Reference | Format | Notes |
| :--- | :--- | :--- |
| **r\_ConfigurationData** | **Range** | A two dimensional array of the user entered categories and groups from the Configuration tab |
| **r\_DashboardData** | **Range** | A two dimensional array of the values in the header of the Dashboard |

